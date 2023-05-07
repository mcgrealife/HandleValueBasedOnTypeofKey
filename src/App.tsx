// WHY:
// Database stores value as string or string[]
// For both, Admin UI input is textArea
// For the database type that is string[], we split the textArea value based on line break chars before saving
// For the database type that is string, we store the value as a string (even if it includes '\n' chars

function App() {
  return (
    <>
      <HandleStringValueBasedOnTypeofKey
        type="single"
        value={`this has \n line breaks, but key thing1 is typeof string, so keep as string`}
      />
      <HandleStringValueBasedOnTypeofKey
        type="multiple"
        value={`this also has \n line breaks, but key thing2 is typeof string[], so value.split('\n')`}
      />
    </>
  );
}

// if I understand correctly, you want to give this component the value as string and a hint on how to handle it
// let's call that hint `type` instead of `key` (because `key` is a property that is used by React inside loops ...)
// Now let's define two possible values for the `type`
// 'single': for when we want to handle the value as a single text
// 'multiple': for when we want to split the value
type Data = {
  type: "single" | "multiple";
  value: string;
};

function HandleStringValueBasedOnTypeofKey({ value, type }: Data) {
  return type === "multiple" ? (
    value.split("\n").map((line) => <p>{line}</p>)
  ) : (
    <p>{value}</p>
  );
}

export default App;
