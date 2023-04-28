const runButton = document.querySelector('#run-button');

runButton.addEventListener('click', () => {
  const word1Input = document.querySelector('#word1-input');
  const word2Input = document.querySelector('#word2-input');
  const word3Input = document.querySelector('#word3-input');
  const word1 = word1Input.value;
  const word2 = word2Input.value;
  const word3 = word3Input.value;
  const workflow = 'action';
  const token = 'USER_TOKEN';

  fetch('https://api.github.com/repos/USER/REPO/actions/workflows/ACTION_NAME.yaml/dispatches', {
    method: 'POST',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
      
    },
    body: JSON.stringify({
      ref: 'main',
      inputs: {
        name: word1,
        entity: word2,
        environment: word3
      }
    })
  })
  .then(response => {
    if (response.ok) {
      console.log(`Workflow ${workflow} dispatched successfully.`);
    } else {
      console.log(`Failed to dispatch workflow ${workflow}.`);
    }
  })
  .catch(error => {
    console.error(`Error dispatching workflow ${workflow}:`, error);
  });
});
