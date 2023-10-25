export function UserNew() {
  return (
    <div>
      <h1>User Info</h1>
      <form>
        <div>
          First Name: <input name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="text" />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" />
        </div>
        <div>
          LinkedIn URL: <input name="linkedin_url" type="url" />
        </div>
        <div>
          Personal Website: <input name="website_url" type="url" />
        </div>
        <div>
          Online Resume URL: <input name="resume_url" type="url" />
        </div>
        <div>
          Github Url: <input name="github_url" type="url" />
        </div>
        <div>
          Twitter Handle: <input name="twitter_handle" type="text" />
        </div>
        <div>
          Add Image Here:
          <input name="photo_url" type="url" />
        </div>
        <button type="submit">New User / Create User</button>
      </form>
    </div>
  );
}
