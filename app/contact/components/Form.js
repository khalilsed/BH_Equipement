import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
export default function Form() {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input id="firstname" placeholder="Nom" type="text" />
        <Input id="lastname" placeholder="Prénom" type="text" />
        <Input id="email" placeholder="Email" type="email" />
        <Input
          id="num"
          isRequired={false}
          placeholder="Numéro de téléphone"
          type="text"
        />
      </div>
      <Textarea id="description" placeholder="Ecrivez votre message ici..." />
      <Button />
    </form>
  );
}