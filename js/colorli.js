$(function(){
    // li CSSѡ��״̬�л�
    $("#lei li").click(function() {
        $(this).siblings('li').removeClass('current');  // ɾ�������ֵ�Ԫ�ص���ʽ
        $(this).addClass('current');                            // ��ӵ�ǰԪ�ص���ʽ
    })
    $("li").click(function(){
        var type=parseInt($(this).val());
        //alert(type);                       // �����ܻ�ȡ����ǰ�����li��ǩ��ǰ��valueֵ
        $.ajax({
            url:'/h5/k/ajax_get_chart',
            type:'post',
            data:{type:type},
            dataType:'json',
            success:function(resp){
                alert(resp.data);
            }
        });
    });
})