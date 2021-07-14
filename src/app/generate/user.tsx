import React from "react";
import Faker from "faker/locale/en";

const generateUser = (num: number) => {
  const users = [];
  for (let index = 0; index < num; index++) {
    users.push({
      firstName: Faker.name.firstName(),
      gender: Faker.name.gender(),
      jobTitle: Faker.name.jobTitle(),
      title: Faker.name.title(),
      prefix: Faker.name.prefix(),
      phoneNumber: Faker.phone.phoneNumber(),
    });
  }
  return users;
};

function UserGenerator() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { num } = e.currentTarget;
          console.log(generateUser(num.value));
        }}
      >
        <label htmlFor="number-of-users">number of users </label>
        <input type="number" name="num" id="number-of-users" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { generateUser };
export default UserGenerator;
