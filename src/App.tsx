// WHY:
// Database stores value as string or string[]
// For both, Admin UI input is textArea
// For the database type that is string[], we split the textArea value based on line break chars before saving
// For the database type that is string, we store the value as a string (even if it includes '\n' chars)

type SomeThing = {
  thing1: string;
  thing2: string[];
};

function App() {
  return (
    <>
      <HandleStringValueBasedOnTypeofKey
        key="thing1" // thing1 is string // return unmodified value as string
        value="this has \n line breaks, but key thing1 is typeof string, so keep as string"
      />
      <HandleStringValueBasedOnTypeofKey
        key="thing2" // thing2 is string[] // return value.split('\n') as string[]
        value="this also has \n line breaks, but key thing2 is typeof string[], so value.split('\n')"
      />
    </>
  );
}

async function HandleStringValueBasedOnTypeofKey({
  value,
  key,
}: {
  value: string; // value is always a string
  key: keyof SomeThing; // but I want to handle it based on the type of Something[key]
}) {
  return Array.isArray(typeof SomeThing[key]) ? (
    value.split("\n").map((line) => <p>{line}</p>)
  ) : (
    <p>{value}</p>
  );
}

export default App;
