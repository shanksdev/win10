export interface Shortcut{
  url:string;
  title:string;
  id?:any;
  height?:number;
  width?:number;
};

export interface IPosition{
  x:number;
  y:number;
};

export interface IContextMenuOptions{
  iconUrl?:string;
  label:string;
  id:any;
  containsSubOptions:boolean
}

export interface IContextMenuConfig{
  position:IPosition;
  backgroundColor?:string;
  color?:string;
  options:Array<IContextMenuOptions>
}
