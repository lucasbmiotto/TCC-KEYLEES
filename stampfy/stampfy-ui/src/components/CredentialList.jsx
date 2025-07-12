import { useEffect, useState } from "react";
import { ethers } from "ethers";
import stampfyAbi from "../abi/Stampfy.json";

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

export default function CredentialList() {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    async function fetchCredentials() {
      try {
        const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, stampfyAbi.abi, provider);
        const creds = await contract.getAllCredentials();
        setCredentials(creds);
      } catch (err) {
        console.error("Erro ao buscar credenciais:", err);
      }
    }

    fetchCredentials();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Credenciais registradas</h2>
      <ul className="space-y-2">
        {credentials.map((cred, index) => (
          <li key={index} className="border p-2 rounded">
            <div><strong>Hash:</strong> {cred.hash}</div>
            <div><strong>Tipo:</strong> {cred.credType}</div>
            <div><strong>DID do Dono:</strong> {cred.ownerDID}</div>
            <div><strong>DID do Emissor:</strong> {cred.issuerDID}</div>
            <div><strong>Timestamp:</strong> {new Date(Number(cred.timestamp) * 1000).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
