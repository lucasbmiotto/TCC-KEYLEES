import CredentialForm from "./components/CredentialForm";
import CredentialList from "./components/CredentialList";

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Stampfy</h1>
      <CredentialForm />
      <hr className="my-6" />
      <CredentialList />
    </div>
  );
}

export default App;
