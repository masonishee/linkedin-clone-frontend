export function EducationIndex(props) {
  return (
    <div>
      <h1>Education</h1>
      {props.educations.map((education) => (
        <div key={education.id}>
          <p>Start date: {education.start_date}</p>
          <p>End date: {education.end_date}</p>
          <p>Degree: {education.degree}</p>
          <p>University: {education.university}</p>
          <p>Details: {education.details}</p>
        </div>
      ))}
    </div>
  );
}
