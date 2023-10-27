export function ProfileIndex(props) {
  return (
    <div>
      <h1>User Info</h1>
      {props.profiles.map((profile) => (
        <div key={profile.id}>
          <p>First Name: {profile.first_name}</p>
          <p>Last Name: {profile.last_name}</p>
          <p>Email: {profile.email}</p>
          <p>Phone Number: {profile.phone_number}</p>
          <p>LinkedIn URL: {profile.linkedin_url}</p>
          <p>Personal Website: {profile.personal_url}</p>
          <p>Online Resume URL: {profile.resume_url}</p>
          <p>Github Url: {profile.github_url}</p>
          <p>Twitter Handle: {profile.twitter}</p>
          <img src={profile.photo} alt="" />
        </div>
      ))}
    </div>
  );
}
