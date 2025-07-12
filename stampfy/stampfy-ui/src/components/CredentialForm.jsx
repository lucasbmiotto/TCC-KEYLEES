import { useState } from "react";
import { ethers } from "ethers";
import stampfyAbi from "../abi/Stampfy.json";

console.log("CONTRACT", process.env.REACT_APP_CONTRACT_ADDRESS);
console.log("RPC URL", process.env.REACT_APP_RPC_URL);
console.log("PRIVATE KEY", process.env.REACT_APP_PRIVATE_KEY);
console.log("ISSUER DID", process.env.REACT_APP_ISSUER_DID);

const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
const ISSUER_DID = process.env.REACT_APP_ISSUER_DID;


export default function CredentialForm() {
  const [file, setFile] = useState(null);
  const [type, setType] = useState("");
  const [ownerDID, setOwnerDID] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file || !type || !ownerDID) return;

    setStatus("🔄 Gerando hash...");

    const reader = new FileReader();
    reader.onload = async (event) => {
      const fileContent = event.target.result;
      const hashBytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(fileContent));
      const hashHex = Array.from(new Uint8Array(hashBytes)).map(b => b.toString(16).padStart(2, "0")).join("");

      try {
        const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
        const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, stampfyAbi.abi, wallet);

        const tx = await contract.registerCredential(hashHex, type, ownerDID, ISSUER_DID);
        setStatus("Aguardando confirmação...");
        await tx.wait();
        setStatus("Credencial registrada com sucesso!");
      } catch (err) {
        console.error(err);
        setStatus("Erro ao registrar credencial");
      }
    };
    reader.readAsText(file);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="file" accept=".json,.pdf,.doc,.docx" onChange={(e) => setFile(e.target.files[0])} required />
      <input type="text" placeholder="Tipo de credencial" value={type} onChange={(e) => setType(e.target.value)} required />
      <input type="text" placeholder="DID do dono" value={ownerDID} onChange={(e) => setOwnerDID(e.target.value)} required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Registrar</button>
      <div>{status}</div>
    </form>
  );
}
