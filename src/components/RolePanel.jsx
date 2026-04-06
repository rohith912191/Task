function RolePanel({ role, onRoleChange }) {
  return (
    <div className="role-panel">
      <label>
        Role
        <select value={role} onChange={(event) => onRoleChange(event.target.value)}>
          <option value="Viewer">Viewer</option>
          <option value="Admin">Admin</option>
        </select>
      </label>
    </div>
  );
}

export default RolePanel;
