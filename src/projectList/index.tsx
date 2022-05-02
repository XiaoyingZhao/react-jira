import { useState, useEffect } from "react";
import { SearchList } from "./SearchList";
import { List } from "./List";
import { useMount, useDebounce } from "../util";
import qs from "qs";
const api = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({ id: "", body: "" });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 2000);
  useEffect(() => {
    fetch(`${api}/list?${qs.stringify(debounceParam)}`).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);

  useMount(() => {
    fetch(`${api}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  return (
    <div>
      <SearchList param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
