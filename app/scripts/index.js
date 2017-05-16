import { markupMenu } from './markup-menu';
markupMenu(window.document);
import carousel from "./carousel";
import scrollbar from "./scrollbar";
import maskedinput from "./maskedinput";
import openclose from "./openclose";
$(() => {
  carousel();
  scrollbar();
  maskedinput();
  openclose();
});
