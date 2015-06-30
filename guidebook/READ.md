Let's start by thinking about what we want to accomplish with this AngularJS app.

1.We want to show all of the chapters of this book
2.For the selected chapter, we also want to show any notes the user has created.
3.Each chapter needs an add note link.
4.Each notes needs a delete me link

We want to utilize ng-repeat(ng-repeat is an annotation). Think of it as a ForEach loop that you would see in JS.
ng-repeat is expecting a list of chapters in our $scope, and hopefully each chapter has a title and summary.

ng-show annotation(like an if conditional)


A list of chapters, each containing a title, summary, and a list of notes.

All notes should have an ID and a content property.
* A property called selectedChapterId.
* A function called onDelete().

ng-model is used to set up a data model shared by the view and its controller. the model isnt a persisted model;
its just a convenient way for the view and controller to share data.
This feature is called 'data binding'.

Think of the ng-model as teh view's way to set properties in the $scope for the controller.




