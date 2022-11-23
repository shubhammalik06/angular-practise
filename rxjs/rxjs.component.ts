import { Component, OnInit } from "@angular/core";
import { interval, map, Subscription, tap } from "rxjs";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.scss"],
})
export class RxjsComponent implements OnInit {
  sub1!: Subscription;

  constructor() {}

  ngOnInit(): void {
    //  this.mergeOperators();
    //  this.tapOperator();
    this.mapOperator();
  }

  // map
  mapOperator() {
    // map(data => Transformed Data)
    // it takes an observable and return us a new modified obersvable

    const broadCastVideos = interval(1000);

    this.sub1 = broadCastVideos
      .pipe(
        tap((data) => {
          if (data == 4) {
            this.sub1.unsubscribe();
          }
        }),
        map((data) => data * 2)
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  mergeOperators() {
    //  const source1 = interval(1000).pipe(map((val) => 'value from the source 1 = ' + val),
    //   take(5));
    // const source2 = interval(2000).pipe(map((val) => 'value from the source 2 = ' + val),
    // take(5));
    // // merge demo
    // merge(source1, source2).subscribe(data => {
    //   console.log(data);
    // });
    // // merge all demo
    // it will subscribe every value of the first observable and emits a value of the second observable.
    // only second observable value will be shown in the output.
    // source1.pipe(
    //   map((value) => source2),
    //   mergeAll()
    // ).subscribe(data => {
    //   console.log(data);
    // });
    // merge map is the combination of map + mergeAll
    //  source1.pipe(
    //   mergeMap((val) => source2)
    // ).subscribe(data => {
    //   console.log(data);
    // });
  }

  // tap
  tapOperator() {
    // we can perfrom any operation inside tap and it will not affect the other operations(transparantely)
    // if we are using multiple operators and want to see on every operation what is our data, we can also use it there.
    const arr = ["Shubham", "Malik", "tap", "example"];

    let obs: Subscription;

    const source = interval(2000);

    obs = source
      .pipe(
        tap((res) => {
          if (res == 4) {
            obs.unsubscribe(); // here tap is unsubscribing the observable when the condition matches
            // but this is not affecting the normal flow of our operations
          }
        }),
        map((res) => arr[res])
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
