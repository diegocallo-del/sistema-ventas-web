package com.ventas.interfaces;

import com.ventas.abstractas.CategoriaBase;
import java.util.List;

public interface Jerarquica {
    CategoriaBase getPadre();

    List<? extends CategoriaBase> getHijos();
}