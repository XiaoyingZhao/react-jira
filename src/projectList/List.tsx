import { User } from "./SearchList";
interface Project {
  id: string;
  body: string;
}
interface ListProp {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProp) => {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{users.find((i) => i.personId === item.id)?.name}</td>
            <td>{item.body}</td>
          </tr>
        ))}
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};
