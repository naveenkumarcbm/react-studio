import {
  Button,
  H1,
  H2,
  H3,
  Input,
  P,
  Select,
  Textarea,
  Label,
} from '../components/index';

const Fields = (props) => {
  switch (props.data.type) {
    case 'button':
      return <Button {...props.data} {...props} />;
    case 'textarea':
      return <Textarea {...props.data} {...props} />;
    case 'select':
      return <Select {...props.data} {...props} />;
    case 'p':
      return <P {...props.data} {...props} />;
    case 'h1':
      return <H1 {...props.data} {...props} />;
    case 'h2':
      return <H2 {...props.data} {...props} />;
    case 'h3':
      return <H3 {...props.data} {...props} />;
    case 'label':
      return <Label {...props.data} {...props} />;
    default:
      return <Input {...props.data} {...props} />;
  }
};

export default Fields;
