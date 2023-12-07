gdjs.GameSceneCode = {};
gdjs.GameSceneCode.forEachIndex2 = 0;

gdjs.GameSceneCode.forEachIndex3 = 0;

gdjs.GameSceneCode.forEachObjects2 = [];

gdjs.GameSceneCode.forEachObjects3 = [];

gdjs.GameSceneCode.forEachTemporary2 = null;

gdjs.GameSceneCode.forEachTemporary3 = null;

gdjs.GameSceneCode.forEachTotalCount2 = 0;

gdjs.GameSceneCode.forEachTotalCount3 = 0;

gdjs.GameSceneCode.GDIndicatorObjects1= [];
gdjs.GameSceneCode.GDIndicatorObjects2= [];
gdjs.GameSceneCode.GDIndicatorObjects3= [];
gdjs.GameSceneCode.GDIndicatorObjects4= [];
gdjs.GameSceneCode.GDHouseTileObjects1= [];
gdjs.GameSceneCode.GDHouseTileObjects2= [];
gdjs.GameSceneCode.GDHouseTileObjects3= [];
gdjs.GameSceneCode.GDHouseTileObjects4= [];
gdjs.GameSceneCode.GDMineTileObjects1= [];
gdjs.GameSceneCode.GDMineTileObjects2= [];
gdjs.GameSceneCode.GDMineTileObjects3= [];
gdjs.GameSceneCode.GDMineTileObjects4= [];
gdjs.GameSceneCode.GDLumberTileObjects1= [];
gdjs.GameSceneCode.GDLumberTileObjects2= [];
gdjs.GameSceneCode.GDLumberTileObjects3= [];
gdjs.GameSceneCode.GDLumberTileObjects4= [];
gdjs.GameSceneCode.GDGoldTextObjects1= [];
gdjs.GameSceneCode.GDGoldTextObjects2= [];
gdjs.GameSceneCode.GDGoldTextObjects3= [];
gdjs.GameSceneCode.GDGoldTextObjects4= [];
gdjs.GameSceneCode.GDStoneTextObjects1= [];
gdjs.GameSceneCode.GDStoneTextObjects2= [];
gdjs.GameSceneCode.GDStoneTextObjects3= [];
gdjs.GameSceneCode.GDStoneTextObjects4= [];
gdjs.GameSceneCode.GDWoodTextObjects1= [];
gdjs.GameSceneCode.GDWoodTextObjects2= [];
gdjs.GameSceneCode.GDWoodTextObjects3= [];
gdjs.GameSceneCode.GDWoodTextObjects4= [];
gdjs.GameSceneCode.GDBackgroundObjects1= [];
gdjs.GameSceneCode.GDBackgroundObjects2= [];
gdjs.GameSceneCode.GDBackgroundObjects3= [];
gdjs.GameSceneCode.GDBackgroundObjects4= [];
gdjs.GameSceneCode.GDBackgroundTreesObjects1= [];
gdjs.GameSceneCode.GDBackgroundTreesObjects2= [];
gdjs.GameSceneCode.GDBackgroundTreesObjects3= [];
gdjs.GameSceneCode.GDBackgroundTreesObjects4= [];
gdjs.GameSceneCode.GDVignetteObjects1= [];
gdjs.GameSceneCode.GDVignetteObjects2= [];
gdjs.GameSceneCode.GDVignetteObjects3= [];
gdjs.GameSceneCode.GDVignetteObjects4= [];
gdjs.GameSceneCode.GDIncomeTextObjects1= [];
gdjs.GameSceneCode.GDIncomeTextObjects2= [];
gdjs.GameSceneCode.GDIncomeTextObjects3= [];
gdjs.GameSceneCode.GDIncomeTextObjects4= [];
gdjs.GameSceneCode.GDHouseButtonObjects1= [];
gdjs.GameSceneCode.GDHouseButtonObjects2= [];
gdjs.GameSceneCode.GDHouseButtonObjects3= [];
gdjs.GameSceneCode.GDHouseButtonObjects4= [];
gdjs.GameSceneCode.GDMineButtonObjects1= [];
gdjs.GameSceneCode.GDMineButtonObjects2= [];
gdjs.GameSceneCode.GDMineButtonObjects3= [];
gdjs.GameSceneCode.GDMineButtonObjects4= [];
gdjs.GameSceneCode.GDLumberButtonObjects1= [];
gdjs.GameSceneCode.GDLumberButtonObjects2= [];
gdjs.GameSceneCode.GDLumberButtonObjects3= [];
gdjs.GameSceneCode.GDLumberButtonObjects4= [];
gdjs.GameSceneCode.GDGreenDotBarObjects1= [];
gdjs.GameSceneCode.GDGreenDotBarObjects2= [];
gdjs.GameSceneCode.GDGreenDotBarObjects3= [];
gdjs.GameSceneCode.GDGreenDotBarObjects4= [];
gdjs.GameSceneCode.GDGreenButtonObjects1= [];
gdjs.GameSceneCode.GDGreenButtonObjects2= [];
gdjs.GameSceneCode.GDGreenButtonObjects3= [];
gdjs.GameSceneCode.GDGreenButtonObjects4= [];
gdjs.GameSceneCode.GDQuizzObjects1= [];
gdjs.GameSceneCode.GDQuizzObjects2= [];
gdjs.GameSceneCode.GDQuizzObjects3= [];
gdjs.GameSceneCode.GDQuizzObjects4= [];
gdjs.GameSceneCode.GDRedButtonWithShadowObjects1= [];
gdjs.GameSceneCode.GDRedButtonWithShadowObjects2= [];
gdjs.GameSceneCode.GDRedButtonWithShadowObjects3= [];
gdjs.GameSceneCode.GDRedButtonWithShadowObjects4= [];
gdjs.GameSceneCode.GDTimerObjects1= [];
gdjs.GameSceneCode.GDTimerObjects2= [];
gdjs.GameSceneCode.GDTimerObjects3= [];
gdjs.GameSceneCode.GDTimerObjects4= [];
gdjs.GameSceneCode.GDbarriereObjects1= [];
gdjs.GameSceneCode.GDbarriereObjects2= [];
gdjs.GameSceneCode.GDbarriereObjects3= [];
gdjs.GameSceneCode.GDbarriereObjects4= [];


gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseButtonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDMineButtonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDLumberButtonObjects2Objects = Hashtable.newFrom({"HouseButton": gdjs.GameSceneCode.GDHouseButtonObjects2, "MineButton": gdjs.GameSceneCode.GDMineButtonObjects2, "LumberButton": gdjs.GameSceneCode.GDLumberButtonObjects2});
gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HouseButton"), gdjs.GameSceneCode.GDHouseButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LumberButton"), gdjs.GameSceneCode.GDLumberButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("MineButton"), gdjs.GameSceneCode.GDMineButtonObjects2);
{gdjs.evtsExt__Toolbar__UpdateToolSelection.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseButtonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDMineButtonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDLumberButtonObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "None";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != "None";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].setAnimationName(gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects2Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects2Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseTileObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDMineTileObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDLumberTileObjects2Objects = Hashtable.newFrom({"HouseTile": gdjs.GameSceneCode.GDHouseTileObjects2, "MineTile": gdjs.GameSceneCode.GDMineTileObjects2, "LumberTile": gdjs.GameSceneCode.GDLumberTileObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseButtonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDMineButtonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDLumberButtonObjects2Objects = Hashtable.newFrom({"HouseButton": gdjs.GameSceneCode.GDHouseButtonObjects2, "MineButton": gdjs.GameSceneCode.GDMineButtonObjects2, "LumberButton": gdjs.GameSceneCode.GDLumberButtonObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseTileObjects3Objects = Hashtable.newFrom({"HouseTile": gdjs.GameSceneCode.GDHouseTileObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMineTileObjects3Objects = Hashtable.newFrom({"MineTile": gdjs.GameSceneCode.GDMineTileObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDLumberTileObjects2Objects = Hashtable.newFrom({"LumberTile": gdjs.GameSceneCode.GDLumberTileObjects2});
gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "House";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) >= 10;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.GameSceneCode.GDGreenDotBarObjects3);
gdjs.copyArray(gdjs.GameSceneCode.GDIndicatorObjects2, gdjs.GameSceneCode.GDIndicatorObjects3);

gdjs.copyArray(gdjs.GameSceneCode.GDHouseTileObjects2, gdjs.GameSceneCode.GDHouseTileObjects3);

{runtimeScene.getScene().getVariables().getFromIndex(1).sub(10);
}{runtimeScene.getScene().getVariables().getFromIndex(2).sub(10);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseTileObjects3Objects, (( gdjs.GameSceneCode.GDIndicatorObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects3[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGreenDotBarObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGreenDotBarObjects3[i].SetValue(gdjs.GameSceneCode.GDGreenDotBarObjects3[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (10), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "Mine";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 20;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameSceneCode.GDIndicatorObjects2, gdjs.GameSceneCode.GDIndicatorObjects3);

gdjs.copyArray(gdjs.GameSceneCode.GDMineTileObjects2, gdjs.GameSceneCode.GDMineTileObjects3);

{runtimeScene.getScene().getVariables().getFromIndex(0).sub(20);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMineTileObjects3Objects, (( gdjs.GameSceneCode.GDIndicatorObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects3[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects3[0].getPointY("")), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "Lumber";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 20;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects2 */
/* Reuse gdjs.GameSceneCode.GDLumberTileObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(20);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDLumberTileObjects2Objects, (( gdjs.GameSceneCode.GDIndicatorObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects2[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects2[0].getPointY("")), "");
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseButtonObjects1ObjectsGDgdjs_9546GameSceneCode_9546GDMineButtonObjects1ObjectsGDgdjs_9546GameSceneCode_9546GDLumberButtonObjects1Objects = Hashtable.newFrom({"HouseButton": gdjs.GameSceneCode.GDHouseButtonObjects1, "MineButton": gdjs.GameSceneCode.GDMineButtonObjects1, "LumberButton": gdjs.GameSceneCode.GDLumberButtonObjects1});
gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects2[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtsExt__HexagonalGrid__SnapObjectToPointyToppedHexagonalGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects2Objects, 120, 140, 60, +(35), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HouseButton"), gdjs.GameSceneCode.GDHouseButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseTile"), gdjs.GameSceneCode.GDHouseTileObjects2);
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects2);
gdjs.copyArray(runtimeScene.getObjects("LumberButton"), gdjs.GameSceneCode.GDLumberButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LumberTile"), gdjs.GameSceneCode.GDLumberTileObjects2);
gdjs.copyArray(runtimeScene.getObjects("MineButton"), gdjs.GameSceneCode.GDMineButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("MineTile"), gdjs.GameSceneCode.GDMineTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIndicatorObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseTileObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDMineTileObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDLumberTileObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseButtonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDMineButtonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDLumberButtonObjects2Objects, runtimeScene, true, false);
isConditionTrue_0 = !isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HouseButton"), gdjs.GameSceneCode.GDHouseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("LumberButton"), gdjs.GameSceneCode.GDLumberButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MineButton"), gdjs.GameSceneCode.GDMineButtonObjects1);
{gdjs.evtsExt__Toolbar__SetTool.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDHouseButtonObjects1ObjectsGDgdjs_9546GameSceneCode_9546GDMineButtonObjects1ObjectsGDgdjs_9546GameSceneCode_9546GDLumberButtonObjects1Objects, "None", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide();
}
}}

}


};gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects2[i].setOpacity(200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != "None";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfEmptyGDHouseTileObjects = Hashtable.newFrom({"HouseTile": []});
gdjs.GameSceneCode.mapOfEmptyGDMineTileObjects = Hashtable.newFrom({"MineTile": []});
gdjs.GameSceneCode.mapOfEmptyGDLumberTileObjects = Hashtable.newFrom({"LumberTile": []});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIncomeTextObjects3Objects = Hashtable.newFrom({"IncomeText": gdjs.GameSceneCode.GDIncomeTextObjects3});
gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIncomeTextObjects3Objects = Hashtable.newFrom({"IncomeText": gdjs.GameSceneCode.GDIncomeTextObjects3});
gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIncomeTextObjects2Objects = Hashtable.newFrom({"IncomeText": gdjs.GameSceneCode.GDIncomeTextObjects2});
gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HouseTile"), gdjs.GameSceneCode.GDHouseTileObjects2);
gdjs.copyArray(runtimeScene.getObjects("LumberTile"), gdjs.GameSceneCode.GDLumberTileObjects2);
gdjs.copyArray(runtimeScene.getObjects("MineTile"), gdjs.GameSceneCode.GDMineTileObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDHouseTileObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHouseTileObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.3, 0, -(3), 0, 10, 0.3, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.GameSceneCode.GDMineTileObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMineTileObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.3, 0, -(3), 0, 10, 0.3, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.GameSceneCode.GDLumberTileObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDLumberTileObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.3, 0, -(3), 0, 10, 0.3, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Boop.wav", false, 25, gdjs.randomFloatInRange(0.7, 0.8));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HouseTile"), gdjs.GameSceneCode.GDHouseTileObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDHouseTileObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;

gdjs.GameSceneCode.GDHouseTileObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDHouseTileObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDHouseTileObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIncomeTextObjects3Objects, (( gdjs.GameSceneCode.GDHouseTileObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDHouseTileObjects3[0].getPointX("")) - 35, (( gdjs.GameSceneCode.GDHouseTileObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDHouseTileObjects3[0].getPointY("")) - 30, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setString("+Gold");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setZOrder((( gdjs.GameSceneCode.GDHouseTileObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDHouseTileObjects3[0].getZOrder()) + 200);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MineTile"), gdjs.GameSceneCode.GDMineTileObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDMineTileObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;

gdjs.GameSceneCode.GDMineTileObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDMineTileObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDMineTileObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIncomeTextObjects3Objects, (( gdjs.GameSceneCode.GDMineTileObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDMineTileObjects3[0].getPointX("")) - 38, (( gdjs.GameSceneCode.GDMineTileObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDMineTileObjects3[0].getPointY("")) - 30, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setString("+Stone");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setZOrder((( gdjs.GameSceneCode.GDMineTileObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDMineTileObjects3[0].getZOrder()) + 200);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LumberTile"), gdjs.GameSceneCode.GDLumberTileObjects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDLumberTileObjects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.GameSceneCode.GDIncomeTextObjects2.length = 0;

gdjs.GameSceneCode.GDLumberTileObjects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDLumberTileObjects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDLumberTileObjects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDIncomeTextObjects2Objects, (( gdjs.GameSceneCode.GDLumberTileObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDLumberTileObjects2[0].getPointX("")) - 42, (( gdjs.GameSceneCode.GDLumberTileObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDLumberTileObjects2[0].getPointY("")) - 30, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects2[i].setString("+Wood");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects2[i].setZOrder((( gdjs.GameSceneCode.GDLumberTileObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDLumberTileObjects2[0].getZOrder()) + 200);
}
}}
}

}


};gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList7(runtimeScene);
}


};gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Income");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Income") > 1.5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Income");
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDHouseTileObjects));
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDMineTileObjects));
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDLumberTileObjects));
}
{ //Subevents
gdjs.GameSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GoldText"), gdjs.GameSceneCode.GDGoldTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("StoneText"), gdjs.GameSceneCode.GDStoneTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.GameSceneCode.GDTimerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodText"), gdjs.GameSceneCode.GDWoodTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGoldTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoldTextObjects1[i].setString("Gold: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDStoneTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStoneTextObjects1[i].setString("Stone: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDWoodTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWoodTextObjects1[i].setString("Wood: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTimer") - 300))));
}
}}

}


{


gdjs.GameSceneCode.eventsList0(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList3(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList9(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
if (isConditionTrue_0) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "Background", "both", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "both", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.random(500) == 25);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.GameSceneCode.GDGreenButtonObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGreenButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.GameSceneCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGreenButtonObjects1[k] = gdjs.GameSceneCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.GameSceneCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDRedButtonWithShadowObjects1[k] = gdjs.GameSceneCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Quizz");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.GameSceneCode.GDGreenButtonObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Quizz");
}{for(var i = 0, len = gdjs.GameSceneCode.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGreenButtonObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Quizz");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GameTimer") >= 300;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}}

}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDIndicatorObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects3.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects4.length = 0;
gdjs.GameSceneCode.GDHouseTileObjects1.length = 0;
gdjs.GameSceneCode.GDHouseTileObjects2.length = 0;
gdjs.GameSceneCode.GDHouseTileObjects3.length = 0;
gdjs.GameSceneCode.GDHouseTileObjects4.length = 0;
gdjs.GameSceneCode.GDMineTileObjects1.length = 0;
gdjs.GameSceneCode.GDMineTileObjects2.length = 0;
gdjs.GameSceneCode.GDMineTileObjects3.length = 0;
gdjs.GameSceneCode.GDMineTileObjects4.length = 0;
gdjs.GameSceneCode.GDLumberTileObjects1.length = 0;
gdjs.GameSceneCode.GDLumberTileObjects2.length = 0;
gdjs.GameSceneCode.GDLumberTileObjects3.length = 0;
gdjs.GameSceneCode.GDLumberTileObjects4.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects1.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects2.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects3.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects4.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects1.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects2.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects3.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects4.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects1.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects2.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects3.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects4.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects4.length = 0;
gdjs.GameSceneCode.GDBackgroundTreesObjects1.length = 0;
gdjs.GameSceneCode.GDBackgroundTreesObjects2.length = 0;
gdjs.GameSceneCode.GDBackgroundTreesObjects3.length = 0;
gdjs.GameSceneCode.GDBackgroundTreesObjects4.length = 0;
gdjs.GameSceneCode.GDVignetteObjects1.length = 0;
gdjs.GameSceneCode.GDVignetteObjects2.length = 0;
gdjs.GameSceneCode.GDVignetteObjects3.length = 0;
gdjs.GameSceneCode.GDVignetteObjects4.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects1.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects2.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects4.length = 0;
gdjs.GameSceneCode.GDHouseButtonObjects1.length = 0;
gdjs.GameSceneCode.GDHouseButtonObjects2.length = 0;
gdjs.GameSceneCode.GDHouseButtonObjects3.length = 0;
gdjs.GameSceneCode.GDHouseButtonObjects4.length = 0;
gdjs.GameSceneCode.GDMineButtonObjects1.length = 0;
gdjs.GameSceneCode.GDMineButtonObjects2.length = 0;
gdjs.GameSceneCode.GDMineButtonObjects3.length = 0;
gdjs.GameSceneCode.GDMineButtonObjects4.length = 0;
gdjs.GameSceneCode.GDLumberButtonObjects1.length = 0;
gdjs.GameSceneCode.GDLumberButtonObjects2.length = 0;
gdjs.GameSceneCode.GDLumberButtonObjects3.length = 0;
gdjs.GameSceneCode.GDLumberButtonObjects4.length = 0;
gdjs.GameSceneCode.GDGreenDotBarObjects1.length = 0;
gdjs.GameSceneCode.GDGreenDotBarObjects2.length = 0;
gdjs.GameSceneCode.GDGreenDotBarObjects3.length = 0;
gdjs.GameSceneCode.GDGreenDotBarObjects4.length = 0;
gdjs.GameSceneCode.GDGreenButtonObjects1.length = 0;
gdjs.GameSceneCode.GDGreenButtonObjects2.length = 0;
gdjs.GameSceneCode.GDGreenButtonObjects3.length = 0;
gdjs.GameSceneCode.GDGreenButtonObjects4.length = 0;
gdjs.GameSceneCode.GDQuizzObjects1.length = 0;
gdjs.GameSceneCode.GDQuizzObjects2.length = 0;
gdjs.GameSceneCode.GDQuizzObjects3.length = 0;
gdjs.GameSceneCode.GDQuizzObjects4.length = 0;
gdjs.GameSceneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.GameSceneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.GameSceneCode.GDRedButtonWithShadowObjects3.length = 0;
gdjs.GameSceneCode.GDRedButtonWithShadowObjects4.length = 0;
gdjs.GameSceneCode.GDTimerObjects1.length = 0;
gdjs.GameSceneCode.GDTimerObjects2.length = 0;
gdjs.GameSceneCode.GDTimerObjects3.length = 0;
gdjs.GameSceneCode.GDTimerObjects4.length = 0;
gdjs.GameSceneCode.GDbarriereObjects1.length = 0;
gdjs.GameSceneCode.GDbarriereObjects2.length = 0;
gdjs.GameSceneCode.GDbarriereObjects3.length = 0;
gdjs.GameSceneCode.GDbarriereObjects4.length = 0;

gdjs.GameSceneCode.eventsList10(runtimeScene);

return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
