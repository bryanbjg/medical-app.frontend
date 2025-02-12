import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { warn } from "node:console";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => warn(err));
