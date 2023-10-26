export function UsersShow(props) {
  return (
    <div>
      <h1>User Info</h1>
      {props.user.map((user) => (
        <div key={user.id}>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phone_number}</p>
          <p>LinkedIn URL: {user.linkedin_url}</p>
          <p>Personal Website: {user.personal_url}</p>
          <p>Online Resume URL: {user.resume_url}</p>
          <p>Github Url: {user.github_url}</p>
          <p>Twitter Handle: {user.twitter}</p>
        </div>
      ))}
    </div>
  );
}
