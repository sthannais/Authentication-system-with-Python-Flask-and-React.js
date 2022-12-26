export const register = async (mail, password) => {
  const data = {
    mail,
    password,
  };
  console.log(data);
  console.log(process.env);
  const result = await fetch(`http://localhost:6004/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  return await result.json();
};

export const loginProfile = async (mail, password) => {
  const data = {
    mail,
    password,
  };
  console.log(data);
  console.log(process.env);
  const result = await fetch(`http://localhost:6004/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  return await result.json();
};
