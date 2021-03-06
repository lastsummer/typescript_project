/// <reference path="./models/drag-drop.ts" />
/// <reference path="./models/project.ts" />
/// <reference path="./state/project-status.ts" />
/// <reference path="./util/validation.ts" />
/// <reference path="./decorator/autobind.ts" />
/// <reference path="./components/base-component.ts" />

/// <reference path="./components/project-list.ts" />
/// <reference path="./components/project-input.ts" />

namespace App{
  new ProjectInput()
  new ProjectList('active')
  new ProjectList('finished')
}