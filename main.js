$(document).ready(function(){
    $('input').on("input", function(){
        $(this).attr("changed", true);
        $(this).attr("value", $(this).val())
    })

    $('form').submit(function(){
        return false;
    });

    $('button').click(function(){
        var edited = true;
        $('li').children('input').each(function(){
            if($(this).attr('changed') === "false"){
                edited= false;
            }
        })

        if(edited === true){
            $('table').append("<tr></tr>");
            $('li').children('input').each(function(){
                // console.log($(this).attr('value'));
                $('tr:last-of-type').append("<td>"+$(this).attr('value')+"</td>");
            })
        } else{
            alert("Enter all fields!")
        }
    })
})