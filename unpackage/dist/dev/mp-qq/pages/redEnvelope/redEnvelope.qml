<view><image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/c0d2da70-cb69-11ea-b244-a9f5e5565f30.jpg"></image><block qq:if="{{start_flag===false}}"><view class="init"><image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/91b9e040-cb0e-11ea-8a36-ebb87efcf8c0.png" data-event-opts="{{[['tap',[['start',['$event']]]]]}}" bindtap="__e"></image><view data-event-opts="{{[['tap',[['start',['$event']]]]]}}" bindtap="__e">点击开始</view><view>当红包出现,开始点击红包测试</view></view></block><block qq:else><view class="start"><view hidden="{{!(awit_flag===true)}}">等待红包出现</view><image hidden="{{!(showRedEnvelope)}}" style="{{'top:'+(redEnvelopeLocationTop+'px')+';'+('left:'+(redEnvelopeLocationLeft+'px')+';')}}" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoyouxi/91b9e040-cb0e-11ea-8a36-ebb87efcf8c0.png" data-event-opts="{{[['tap',[['stopTimer',['$event']]]]]}}" bindtap="__e"></image><view hidden="{{!(speed!=0)}}" class="result"><block qq:if="{{speed<=qualifiedTime}}"><view><view style="font-size:40px;">{{speed+"ms"}}</view><view style="color:green;font-size:20px;">测试合格</view><view style="margin-top:20rpx;font-size:35rpx;">{{"当前合格时间:"+qualifiedTime+"ms"}}</view><view style="margin-top:20rpx;font-size:35rpx;">{{"下轮合格时间:"+futureQualifiedTime+"ms"}}</view><view style="font-size:20px;">您已成功坚持<text style="font-size:50rpx;color:#007AFF;">{{qualified}}</text>轮</view><button style="margin-top:100px;background-color:#4CD964;" type="default" data-event-opts="{{[['tap',[['continuePlay',['$event']]]]]}}" bindtap="__e">继续挑战</button></view></block><block qq:else><view><view style="font-size:40px;">{{speed+"ms"}}</view><view style="color:rgb(251, 227, 43);font-size:20px;">测试不合格</view><view style="margin-top:20rpx;font-size:35rpx;">{{"当前合格时间:"+qualifiedTime+"ms"}}</view><view style="font-size:20px;">您成功坚持<text style="font-size:50rpx;color:#007AFF;">{{qualified}}</text>轮</view><button class="resurrection" type="default" data-event-opts="{{[['tap',[['resurrectionPlay',['$event']]]]]}}" bindtap="__e">{{"复活挑战("+freeResurrection+")"}}</button><button class="reset" type="default" data-event-opts="{{[['tap',[['reset',['$event']]]]]}}" bindtap="__e">重新挑战</button></view></block></view></view></block></view>