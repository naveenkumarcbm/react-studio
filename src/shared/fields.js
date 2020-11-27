import {
  Button,
  H1,
  H2,
  H3,
  Input,
  P,
  Select,
  Textarea,
} from '../components/index';

const Fields = (props) => {
  const { data, children } = props;
  switch (data.type) {
    case 'button':
      return <Button {...data} />;
    case 'textarea':
      return <Textarea {...data} />;
    case 'select':
      return <Select {...data} />;
    case 'p':
      return <P {...data} children={children} />;
    case 'h1':
      return <H1 {...data} children={children} />;
    case 'h2':
      return <H2 {...data} children={children} />;
    case 'h3':
      return <H3 {...data} children={children} />;
    default:
      return <Input {...data} />;
  }
};

export default Fields;
