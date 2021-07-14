import React from "react";
import { addCompany } from "../../features/companySlice";
import { useAppDispatch } from "../hooks";

function CompanyGenerator() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { num } = e.currentTarget;
          dispatch(addCompany({ num: num.value }));
        }}
      >
        <label htmlFor="number-of-companies">number of companies </label>
        <input type="number" name="num" id="number-of-companies" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CompanyGenerator;
