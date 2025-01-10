import React from 'react';
import { Button } from '@react95/core';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin-bottom: 10px;
`;

function Resume({ content }) {
  const { workExperience, education, resumeLink, technicalSkills, certifications, citizenship } = content;

  return (
    <div>
      <h2>Recent Experience</h2>
      {workExperience.map((exp, idx) => (
        <div key={idx}>
          <p>
            <b>{exp.jobTitle}</b> | {exp.company} | {exp.location}
          </p>
          <p>{exp.period}</p>
          <ul>
            {exp.accomplishments.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
          <br />
        </div>
      ))}
      <hr />
      <h2>Education</h2>
      {education.map((ed, idx) => (
        <div key={idx}>
          <p>
            <b>{ed.credit}</b>
          </p>
          <p>{ed.place}</p>
          <br />
        </div>
      ))}

      <hr />

      <h2>Technical Skills</h2>
      <ul>
        {technicalSkills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>

      <hr />

      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx}>{cert}</li>
        ))}
      </ul>

      <hr />

      <h2>Citizenship</h2>
      <ul>
        {citizenship.map((cit, idx) => (
          <li key={idx}>{cit}</li>
        ))}
      </ul>

      <StyledLink href={resumeLink} download>
        <Button style={{ fontSize: '14px' }} className="pointer">
          Download Resume
        </Button>
      </StyledLink>
    </div>
  );
}

export default Resume;
