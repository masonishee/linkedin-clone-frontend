export function UsersShow(props) {
  return (
    <div>
      <h1>User Info</h1>
      <div>
        <p>First Name: {props.user.first_name}</p>
        <p>Last Name: {props.user.last_name}</p>
        <p>Email: {props.user.email}</p>
        <p>Phone Number: {props.user.phone_number}</p>
        <p>LinkedIn URL: {props.user.linkedin_url}</p>
        <p>Personal Website: {props.user.personal_url}</p>
        <p>Online Resume URL: {props.user.resume_url}</p>
        <p>Github Url: {props.user.github_url}</p>
        <p>Twitter Handle: {props.user.twitter}</p>
        <p>
          Add Image Here:
          {props.user.photo}
        </p>
      </div>
      <button type="submit">Update</button>
    </div>
  );
}
