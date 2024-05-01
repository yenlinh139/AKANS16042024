/**
 * Zaui 1.11.0-beta.0
 * Zalo Mini App framework 
 * undefined
 *
 * Copyright 2022-2024 Zalo Mini App
 *
 * Released under the ISC License
 *
 * Released on: April 15, 2024
 */

const App = React.lazy(() => import("./app"));
const Button = React.lazy(() => import("./button"));
const Icon = React.lazy(() => import("./icon"));
const List = React.lazy(() => import("./list"));
const Input = React.lazy(() => import("./input"));
const Avatar = React.lazy(() => import("./avatar"));
const Modal = React.lazy(() => import("./modal"));
const Sheet = React.lazy(() => import("./sheet"));
const Tabs = React.lazy(() => import("./tabs"));
const Page = React.lazy(() => import("./page"));
const Text = React.lazy(() => import("./text"));
const Box = React.lazy(() => import("./box"));
const Checkbox = React.lazy(() => import("./checkbox"));
const Radio = React.lazy(() => import("./radio"));
const Switch = React.lazy(() => import("./switch"));
const Progress = React.lazy(() => import("./progress"));
const Spinner = React.lazy(() => import("./spinner"));
const Slider = React.lazy(() => import("./slider"));
const Header = React.lazy(() => import("./header"));
const Select = React.lazy(() => import("./select"));
const SnackbarProvider = React.lazy(() => import("./snackbar-provider"));
const Picker = React.lazy(() => import("./picker"));
const DatePicker = React.lazy(() => import("./date-picker"));
const BottomNavigation = React.lazy(() => import("./bottom-navigation"));
const Swiper = React.lazy(() => import("./swiper"));
const ImageViewer = React.lazy(() => import("./image-viewer"));
const Stack = React.lazy(() => import("./stack"));
const ZBox = React.lazy(() => import("./zbox"));
const Center = React.lazy(() => import("./center"));
const Cluster = React.lazy(() => import("./cluster"));
const Grid = React.lazy(() => import("./grid"));
const Calendar = React.lazy(() => import("./calendar"));
const useNavigate = React.lazy(() => import("./useNavigate"));
const useSnackbar = React.lazy(() => import("./useSnackbar"));

import ZMPRouter, { AnimationRoutes } from "./router";
import { useTheme } from "./useTheme";

export {
    App,
    useTheme,
    Button,
    Icon,
    List,
    Input,
    Avatar,
    Modal,
    Sheet,
    Tabs,
    AnimationRoutes,
    ZMPRouter,
    Page,
    Text,
    Box,
    Checkbox,
    Radio,
    Switch,
    Progress,
    Spinner,
    Header,
    Slider,
    Select,
    SnackbarProvider,
    useSnackbar,
    Picker,
    DatePicker,
    BottomNavigation,
    useNavigate,
    Swiper,
    ImageViewer,
    Stack,
    ZBox,
    Center,
    Cluster,
    Grid,
    Calendar,
};
