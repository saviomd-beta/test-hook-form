import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  f = "female",
  m = "male",
  o = "other",
}

interface IFormInput {
  firstName: string;
  lastName: string;
  gender?: GenderEnum;
}

function App() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">first name</label>
        <br />
        <input {...register("firstName")} type="text" />
      </div>
      <div>
        <label htmlFor="lastName">last name</label>
        <br />
        <input {...register("lastName")} type="text" />
      </div>
      <div>
        <label htmlFor="gender">gender</label>
        <br />
        <select {...register("gender")}>
          <option>--</option>
          <option value="f">female</option>
          <option value="m">male</option>
          <option value="o">other</option>
        </select>
      </div>
      <button type="submit">send</button>
    </form>
  );
}

export default App;
