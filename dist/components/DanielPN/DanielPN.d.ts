import { SxProps } from '@mui/system';
import * as React from 'react';
export interface DanielPNProps {
    open: boolean;
    onClose: () => void;
    title: string;
    content: string[];
    titleSx?: SxProps;
    contentSx?: SxProps;
    dialogSx?: SxProps;
    width?: string;
    height?: string;
}
declare const DanielPN: React.FC<DanielPNProps>;
export default DanielPN;
