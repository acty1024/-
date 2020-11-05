function pandaun(){

if((touch1==1||2||3)&&touch2==4)//role1攻击role2未攻击且可选中
{ 
    //扣掉角色2血量
    //增加角色1怒气
    //增加角色2怒气


}


if((touch1==1||2||3)&&touch2==5)//role1攻击role2不可选中
{
//攻击失败

}
if((touch1==1||2||3)&&touch2==4)//role1攻击role2同时攻击
{
     if(touch1>touch2)//role1优先级高
     {
    //扣掉角色2血量
    //增加角色1怒气
    //增加角色2怒气

     }
     if(touch1==touch2)//优先级相同
     {//攻击同时生效

     }
     if(touch1<touch2)//role2优先级高
     {//扣掉角色1血量
    //增加角色1怒气
    //增加角色2怒气


     }

}



}