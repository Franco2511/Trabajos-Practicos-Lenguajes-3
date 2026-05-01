$(function () {

  const dt = $('#tablaTareas').DataTable({
    language: {
      search:     "Buscar:",
      lengthMenu: "Mostrar _MENU_ tareas",
      info:       "Mostrando _START_–_END_ de _TOTAL_",
      paginate:   { previous: "&#8592;", next: "&#8594;" },
      emptyTable: "Sin tareas registradas. ¡Agregá una!"
    },
    columnDefs: [{ orderable: false, targets: 2 }],
    pageLength: 10
  });

  /* ── badge html helper ── */
  function badgeHtml(p) {
    const cls = { Alta: 'alta', Media: 'media', Baja: 'baja' }[p] || 'baja';
    return `<span class="badge badge-${cls}"><span class="badge-dot"></span>${p}</span>`;
  }

  function updateCounters() {
    const rows = dt.rows().data();
    let a = 0, m = 0, b = 0;
    rows.each(function(r) {
      const p = $(r[1]).text().trim();
      if (p === 'Alta') a++;
      else if (p === 'Media') m++;
      else b++;
    });
    const t = a + m + b;
    $('#cnt-total').text(t);
    $('#cnt-alta').text(a);
    $('#cnt-media').text(m);
    $('#cnt-baja').text(b);
  }

  $('#btnAgregar').on('click', function () {
    const nombre = $('#nombreTarea').val().trim();
    const prioridad = $('#prioridad').val();

    if (!nombre) {
      $('#error-msg').fadeIn(200);
      $('#nombreTarea').focus();
      return;
    }

    $('#error-msg').fadeOut(150);

    const delBtn = $('<button class="btn-del">eliminar</button>');

    const tdNombre = $('<td>').text(nombre);
    const tdPrioridad = $('<td>').html(badgeHtml(prioridad));
    const tdAccion = $('<td>').append(delBtn);

    const $row = $('<tr>').append(tdNombre, tdPrioridad, tdAccion);

    const rowNode = dt.row.add($row[0]).draw(false).node();
    $(rowNode).hide().fadeIn(500);

    $('#nombreTarea').val('').focus();

    updateCounters();

    delBtn.on('click', function () {
      const $tr = $(this).closest('tr');
      $tr.fadeOut(400, function () {
        dt.row($tr).remove().draw(false);
        updateCounters();
      });
    });
  });

  $('#nombreTarea').on('keydown', function (e) {
    if (e.key === 'Enter') $('#btnAgregar').trigger('click');
  });

  $('#titulo').on('mouseenter', function () {
    $(this).css('color', '#6c63ff');
  }).on('mouseleave', function () {
    $(this).css('color', '');
  });

});