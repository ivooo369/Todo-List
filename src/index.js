import "./style.css";
import { Task, Note } from "./mainLogic";
import {
  ImageHandler,
  CreationWindow,
  EditWindow,
  Menu,
  ContainerCreator,
} from "./domManipulation";
import { Validation } from "./validation";
import {
  MenuEventListeners,
  CreationWindowEventListeners,
  EditWindowEventListeners,
  MainInterfaceEventListeners,
  AllEventListeners,
} from "./handleEventListeners";

export const task = Task();
export const note = Note();
export const validation = Validation();
export const creationWindow = CreationWindow();
export const editWindow = EditWindow();
export const menu = Menu();
export const containerCreator = ContainerCreator();
export const imageHandler = ImageHandler();
export const menuEventListeners = MenuEventListeners();
export const creationWindowEventListeners = CreationWindowEventListeners();
export const editWindowEventListeners = EditWindowEventListeners();
export const mainInterfaceEventListeners = MainInterfaceEventListeners();
const allEventListeners = AllEventListeners();

allEventListeners.handleAllEventListeners();
imageHandler.createImages();
