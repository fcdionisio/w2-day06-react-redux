import * as actions from "./actionType";
import myImage  from './images/ferdie.png';
import myWife from './images/wife.png'
import jimPic from './images/patrick.png'

const initState = {
    employeeData: [
        {
            id: 1,
            name: "Ferdie Dionisio",
            salary: 10000,
            Age : 21,
            profilePic: myImage
        },
        {
            id: 2,
            name: "Jim Enriquez",
            salary: 20500,
            Age : 31,
            profilePic: jimPic
        },
        {
            id: 3,
            name: "Maricel Dimla",
            salary: 15200,
            Age : 25,
            profilePic: myWife
        },
    ],
};
const reducer = (state = initState, action) => {
    //console.log(action);
    var dbEmp, tmpEmp;
    switch (action.type) {
        case actions.INCREASESALARY:
         dbEmp = state.employeeData    
         tmpEmp = action.payload
            tmpEmp.salary += 500;
            dbEmp[action.payload.id-1].salary =  tmpEmp.salary
            //console.log(dbEmp);
            return { ...state, employeeData: [...dbEmp] }
        case actions.DECREASESALARY:
         dbEmp = state.employeeData    
         tmpEmp = action.payload
            tmpEmp.salary -= 500;
            dbEmp[action.payload.id-1].salary =  tmpEmp.salary
            //console.log(dbEmp);
            return { ...state, employeeData: [...dbEmp] }
        default:
            return state;
    }
}

export default reducer;