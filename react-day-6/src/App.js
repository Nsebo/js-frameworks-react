import './App.css';
import {ThemeProvider} from "styled-components";
import PageHeading from "./components/headings/PageHeading";
import Container from "./components/layout/Container";
import Form from "./components/form/Form";
import Input from "./components/form/Input";


const theme = {
    primaryColor: "#00008B",
    secondaryColor: "#fa8072",
    borderColour: "#888"
}

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Container>
              <PageHeading>Register</PageHeading>
              <Form>
                  <Input placeholder="Name" />
                  <Input placeholder="City" bcolour="red"/>
              </Form>
          </Container>
      </ThemeProvider>

  );
}

export default App;
