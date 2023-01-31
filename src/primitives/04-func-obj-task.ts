interface User {
  login: string;
  email?: string;
  password: string;
  isOnline?: boolean;
  lastVisited?: Date;
}

const user1: User = {
  login: "Sasha",
  email: "sasha@mail.ui",
  password: "gjkhjoidjxfglhi",
  isOnline: true,
  lastVisited: new Date(),
};

interface Admin {
  login: string;
  email?: string;
  password: string;
  isOnline?: boolean;
  lastVisited?: Date;
  role: string;
}

export const admin1: Admin = {
  login: "Sasha",
  email: "sashaAdmin@mail.ui",
  password: "uygyuipiouigofi",
  isOnline: false,
  lastVisited: new Date(2022, 6, 5),
  role: "admin",
};

function login(user: { login: string; password: string }): void {
  if (user.login.length > 0 && user.password.length > 0) {
    console.log("Hello", user.login);
  }
}

login(user1);
login(admin1);
