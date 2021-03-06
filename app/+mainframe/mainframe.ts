/**
 * Created by Shane Yao on 2016/9/13.
 */

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoggingService} from "../shared/services/logging_service";
declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: "cf2-mainframe",
  templateUrl: "mainframe.tpl.html",
  styleUrls: ["mainframe.css"]
})

export class MainFrame implements OnInit
{
  constructor(private router_:Router, private logger_:LoggingService)
  {
  }

  ngOnInit(): any
  {
    this.logger_.debug("------------->MainFrame");
    jQuery('.ui.accordion').accordion();
    return undefined;
  }
}