export interface User {
  personId: string;
  name: string;
}
interface SearchListProps {
  users: User[];
  param: {
    id: string;
    body: string;
  };
  setParam: (param: SearchListProps["param"]) => void;
}
export const SearchList = ({ param, setParam, users }: SearchListProps) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.body}
          onChange={(e) => setParam({ ...param, id: e.target.value })}
        />
        <select
          value={param.id}
          onChange={(e) => setParam({ ...param, body: e.target.value })}
        >
          {users.map((item) => (
            <option value={item.personId} key={item.personId}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
