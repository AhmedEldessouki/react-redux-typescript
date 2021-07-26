import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Faker from "faker/locale/en";

const generateCompany = (num: number | undefined = 1) => {
  const array = [];
  for (let index = 0; index < num; index++) {
    array.push({
      companyName: Faker.company.companyName(),
      companySuffix: Faker.company.companySuffix(),
    });
  }
  return array;
};

type CompanyType = {
  companyName: string;
  companySuffix: string;
};
type StateType = {
  companyList: Array<CompanyType>;
};

const initialState: StateType = {
  companyList: generateCompany(),
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addCompany(state, action: PayloadAction<{ num: number } | undefined>) {
      state.companyList.push(...generateCompany(action.payload?.num));
      return state;
    },
    removeCompany(state, action: PayloadAction<{ index: number }>) {
      state.companyList.splice(action.payload.index, 1);
      return state;
    },
    updateCompany(
      state,
      action: PayloadAction<{ index: number; updateCompanyData: CompanyType }>
    ) {
      state.companyList.splice(
        action.payload.index,
        1,
        action.payload.updateCompanyData
      );
      return state;
    },
  },
});
export const { addCompany, removeCompany, updateCompany } =
  companySlice.actions;
export default companySlice.reducer;
