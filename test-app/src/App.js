import Input from './components/Input/Input';

function App() {
  return (
    <div>
      <h2>INPUTS</h2>
      <Input title="Title" placeholder="Placeholder" />
      
      <h2>FOCUS</h2>
      <Input title="Title" value="Text" />
      
      <h2>ACTIVE</h2>
      <Input title="Title" value="Text" />
      
      <h2>DISABLED</h2>
      <Input title="Title" value="Text" disabled={true} />
      
      <h2>ERROR</h2>
      <Input title="Title" value="Text" error={true} errorText="Error text" />
    </div>
  );
}
export default App;