export function EducationNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateEducation(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Education: </h1>
      <form onSubmit={handleSubmit}>
        <div>
          Start Date: <input name="start_date" type="text" />
        </div>
        <div>
          End Date: <input name="end_date" type="text" />
        </div>
        <div>
          Degree: <input name="degree" type="text" />
        </div>
        <div>
          University: <input name="university" type="text" />
        </div>
        <div>
          Details: <input name="details" type="text" />
        </div>
        <button type="submit">Create Education</button>
      </form>
    </div>
  );
}
