import {
  BiParagraph,
  BiHeading,
  BiText,
  BiJoystickButton,
  BiChevronDown
} from 'react-icons/bi';
import { BsTextareaT, BsCursorText } from 'react-icons/bs';
export const componentList = [
  {
    label: 'button',
    type: 'button',
    icon: <BiJoystickButton />,
  },
  {
    label: 'textarea',
    type: 'textarea',
    icon: <BiText />,
  },
  {
    label: 'input',
    type: 'input',
    icon: <BsTextareaT />,
  },
  {
    label: 'select',
    type: 'select',
    icon: <BiChevronDown />,
  },
  {
    label: 'Paragraph',
    type: 'p',
    icon: <BiParagraph />,
  },
  {
    label: 'h1',
    type: 'h1',
    icon: <BiHeading />,
  },
  {
    label: 'h2',
    type: 'h2',
    icon: <BiHeading />,
  },
  {
    label: 'h3',
    type: 'h3',
    icon: <BiHeading />,
  }
];
