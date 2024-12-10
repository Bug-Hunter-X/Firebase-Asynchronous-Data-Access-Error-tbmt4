The solution involves ensuring that the data has loaded before you access it.  Here's how you can fix the problem using async/await:

```javascript
async function getData() {
  const snapshot = await db.ref('users').once('value');
  const userData = snapshot.val();
  if (userData) {
    console.log(userData.name);
  } else {
    console.log('User data not found');
  }
}

getData();
```

This revised code utilizes `once('value')` with `async/await` to wait for the data to be retrieved before attempting to access it.  This approach prevents errors that could arise from accessing undefined values.