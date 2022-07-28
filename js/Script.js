var pswrd;
        var pc = "b";
        var pl = "t";
        var pf = "c";
        var pb = "m";
        var pg = "d";
        var pe = "n";
        var ph = "e";
        var pm = "y";
        var pi = "f";
        var pd = "a";
        var pj = "g";
        var pa = "z" || "Z";
        password = prompt('Enter Password', ' ');
        if (password == pa + pb + pd + pe + pl + pm) {
            alert('Wellcome Abdelmalek! Click OK to Enter!');
        } else if (password == pa + pb + pd + pe + pm) {
            alert('Wellcome Hanane! Click OK to Enter!');
        } else {
            alert('Wrong direction bro!!!');
            close();
        }
