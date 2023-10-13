import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import EnrollmentForm from "./components/formik/EnrollmentForm";
import ChakraInput from "./components/formik/ChakraInput";
import LoginForm from "./components/formik/LoginForm";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <EnrollmentForm /> */}
        <LoginForm />
      </div>
    </ChakraProvider>
  );
};
export default App;
