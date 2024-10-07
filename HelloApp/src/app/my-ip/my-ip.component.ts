import { Component, OnInit } from '@angular/core';

type IpData = {
  ip: string;
};

@Component({
  selector: 'app-my-ip',
  standalone: true,
  imports: [],
  templateUrl: './my-ip.component.html',
  styleUrl: './my-ip.component.scss',
})
export class MyIpComponent implements OnInit {
  isLoading: boolean = true;
  ip: string = '';

  ngOnInit() {
    this.getMyIp();
  }

  async getMyIp() {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = (await response.json()) as IpData;
    console.log(data.ip);
    this.ip = data.ip;
    this.isLoading = false;
  }
}
