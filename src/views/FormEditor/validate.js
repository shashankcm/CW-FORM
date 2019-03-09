
async function submitToServer(data) {


  try {
    let response = await fetch('http://localhost:3000/api/form', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let responseJSON = await response.JSON();
    return responseJSON;
  } catch (error) {
    console.error();
  }
}

const validate = values => {


  const errors = {};
  if (!values.formName) {
    errors.formName = 'Required';
  }
  if (!values.members || !values.members.length) {
    errors.members = { _error: 'At least one member must be entered' };
  } else {
    const membersArrayErrors = [];
    values.members.forEach((member, memberIndex) => {
      const memberErrors = {};
      if (!member || !member.firstName) {
        memberErrors.firstName = 'Required';
        membersArrayErrors[memberIndex] = memberErrors;
      }
      if (!member || !member.lastName) {
        memberErrors.lastName = 'Required';
        membersArrayErrors[memberIndex] = memberErrors;
      }
      if (member && member.hobbies && member.hobbies.length) {
        const hobbyArrayErrors = [];
        member.hobbies.forEach((hobby, hobbyIndex) => {
          if (!hobby || !hobby.length) {
            hobbyArrayErrors[hobbyIndex] = 'Required';
          }
        });
        if (hobbyArrayErrors.length) {
          memberErrors.hobbies = hobbyArrayErrors;
          membersArrayErrors[memberIndex] = memberErrors;
        }
        if (member.hobbies.length > 5) {
          if (!memberErrors.hobbies) {
            memberErrors.hobbies = [];
          }
          memberErrors.hobbies._error = 'No more than five hobbies allowed';
          membersArrayErrors[memberIndex] = memberErrors;
        }
      }
    });
    if (membersArrayErrors.length) {
      errors.members = membersArrayErrors;
    }
  }
  return errors;
};

//submitToServer().then(data => console.log(data));

export default validate;
