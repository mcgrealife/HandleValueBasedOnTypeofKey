type SomeThing = {
  thing1: string;
  thing2: string[];
};

function App() {
  return (
    <>
      <HandleValueBasedOnTypeofKey
        key="thing1"
        value="this has \n line breaks, but key thing1 is typeof string, so keep as string"
      />
      <HandleValueBasedOnTypeofKey
        key="thing2"
        value="this also has \n line breaks, but key thing2 is typeof string[], so value.split('\n')"
      />
    </>
  );
}

async function HandleValueBasedOnTypeofKey({
  value,
  key,
}: {
  value: string;
  key: keyof SomeThing;
}) {
  return Array.isArray(typeof SomeThing[key]) ? (
    value.split("\n").map((line) => <p>{line}</p>)
  ) : (
    <p>{value}</p>
  );
}

export default App;
