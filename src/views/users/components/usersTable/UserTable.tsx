import { FC } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { User } from "../../../../models/user";

const columns: TableColumn<User>[] = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
    sortable: true,
  },
];

interface Props {
  users: User[];
}

const UserTable: FC<Props> = ({ users }) => {
  return (
    <div className="DataTable">
      <DataTable
        columns={columns}
        data={users}
        // selectableRows
        fixedHeader
        selectableRowsHighlight
        highlightOnHover
      />
    </div>
  );
};
export default UserTable;
